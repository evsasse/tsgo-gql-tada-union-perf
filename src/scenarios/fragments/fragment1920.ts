import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1918 } from "./fragment1918";
import type { FragmentToken1919 } from "./fragment1919";

export const FRAGMENT_1920 = gql(`
  fragment Fragment1920 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult1920 = ResultOf<typeof FRAGMENT_1920>;
type FragmentSelf1920 = NonNullable<FragmentResult1920>;

export type FragmentToken1920 =
  | FragmentSelf1920["__typename"]
  | FragmentSelf1920["typenameHint"] | FragmentToken1918 | FragmentToken1919;
