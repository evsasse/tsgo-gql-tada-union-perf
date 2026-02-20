import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1337 } from "./fragment1337";
import type { FragmentToken1338 } from "./fragment1338";

export const FRAGMENT_1339 = gql(`
  fragment Fragment1339 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult1339 = ResultOf<typeof FRAGMENT_1339>;
type FragmentSelf1339 = NonNullable<FragmentResult1339>;

export type FragmentToken1339 =
  | FragmentSelf1339["__typename"]
  | FragmentSelf1339["typenameHint"] | FragmentToken1337 | FragmentToken1338;
