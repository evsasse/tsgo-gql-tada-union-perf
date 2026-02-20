import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1919 } from "./fragment1919";
import type { FragmentToken1920 } from "./fragment1920";

export const FRAGMENT_1921 = gql(`
  fragment Fragment1921 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult1921 = ResultOf<typeof FRAGMENT_1921>;
type FragmentSelf1921 = NonNullable<FragmentResult1921>;

export type FragmentToken1921 =
  | FragmentSelf1921["__typename"]
  | FragmentSelf1921["typenameHint"] | FragmentToken1919 | FragmentToken1920;
