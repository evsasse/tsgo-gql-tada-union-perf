import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1920 } from "./fragment1920";
import type { FragmentToken1921 } from "./fragment1921";

export const FRAGMENT_1922 = gql(`
  fragment Fragment1922 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult1922 = ResultOf<typeof FRAGMENT_1922>;
type FragmentSelf1922 = NonNullable<FragmentResult1922>;

export type FragmentToken1922 =
  | FragmentSelf1922["__typename"]
  | FragmentSelf1922["typenameHint"] | FragmentToken1920 | FragmentToken1921;
