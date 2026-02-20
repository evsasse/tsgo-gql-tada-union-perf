import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1073 } from "./fragment1073";
import type { FragmentToken1074 } from "./fragment1074";

export const FRAGMENT_1075 = gql(`
  fragment Fragment1075 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult1075 = ResultOf<typeof FRAGMENT_1075>;
type FragmentSelf1075 = NonNullable<FragmentResult1075>;

export type FragmentToken1075 =
  | FragmentSelf1075["__typename"]
  | FragmentSelf1075["typenameHint"] | FragmentToken1073 | FragmentToken1074;
