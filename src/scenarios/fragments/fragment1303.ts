import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1301 } from "./fragment1301";
import type { FragmentToken1302 } from "./fragment1302";

export const FRAGMENT_1303 = gql(`
  fragment Fragment1303 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult1303 = ResultOf<typeof FRAGMENT_1303>;
type FragmentSelf1303 = NonNullable<FragmentResult1303>;

export type FragmentToken1303 =
  | FragmentSelf1303["__typename"]
  | FragmentSelf1303["typenameHint"] | FragmentToken1301 | FragmentToken1302;
