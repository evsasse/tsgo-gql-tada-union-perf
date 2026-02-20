import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1181 } from "./fragment1181";
import type { FragmentToken1182 } from "./fragment1182";

export const FRAGMENT_1183 = gql(`
  fragment Fragment1183 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult1183 = ResultOf<typeof FRAGMENT_1183>;
type FragmentSelf1183 = NonNullable<FragmentResult1183>;

export type FragmentToken1183 =
  | FragmentSelf1183["__typename"]
  | FragmentSelf1183["typenameHint"] | FragmentToken1181 | FragmentToken1182;
