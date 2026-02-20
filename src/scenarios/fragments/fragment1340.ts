import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1338 } from "./fragment1338";
import type { FragmentToken1339 } from "./fragment1339";

export const FRAGMENT_1340 = gql(`
  fragment Fragment1340 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult1340 = ResultOf<typeof FRAGMENT_1340>;
type FragmentSelf1340 = NonNullable<FragmentResult1340>;

export type FragmentToken1340 =
  | FragmentSelf1340["__typename"]
  | FragmentSelf1340["typenameHint"] | FragmentToken1338 | FragmentToken1339;
