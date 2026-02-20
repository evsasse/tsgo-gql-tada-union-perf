import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1921 } from "./fragment1921";
import type { FragmentToken1922 } from "./fragment1922";

export const FRAGMENT_1923 = gql(`
  fragment Fragment1923 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult1923 = ResultOf<typeof FRAGMENT_1923>;
type FragmentSelf1923 = NonNullable<FragmentResult1923>;

export type FragmentToken1923 =
  | FragmentSelf1923["__typename"]
  | FragmentSelf1923["typenameHint"] | FragmentToken1921 | FragmentToken1922;
