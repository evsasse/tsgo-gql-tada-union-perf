import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1112 } from "./fragment1112";
import type { FragmentToken1113 } from "./fragment1113";

export const FRAGMENT_1114 = gql(`
  fragment Fragment1114 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult1114 = ResultOf<typeof FRAGMENT_1114>;
type FragmentSelf1114 = NonNullable<FragmentResult1114>;

export type FragmentToken1114 =
  | FragmentSelf1114["__typename"]
  | FragmentSelf1114["typenameHint"] | FragmentToken1112 | FragmentToken1113;
