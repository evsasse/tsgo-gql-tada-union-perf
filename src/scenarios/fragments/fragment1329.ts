import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1327 } from "./fragment1327";
import type { FragmentToken1328 } from "./fragment1328";

export const FRAGMENT_1329 = gql(`
  fragment Fragment1329 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult1329 = ResultOf<typeof FRAGMENT_1329>;
type FragmentSelf1329 = NonNullable<FragmentResult1329>;

export type FragmentToken1329 =
  | FragmentSelf1329["__typename"]
  | FragmentSelf1329["typenameHint"] | FragmentToken1327 | FragmentToken1328;
