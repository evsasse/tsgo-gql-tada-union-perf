import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken389 } from "./fragment389";
import type { FragmentToken390 } from "./fragment390";

export const FRAGMENT_391 = gql(`
  fragment Fragment391 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult391 = ResultOf<typeof FRAGMENT_391>;
type FragmentSelf391 = NonNullable<FragmentResult391>;

export type FragmentToken391 =
  | FragmentSelf391["__typename"]
  | FragmentSelf391["typenameHint"] | FragmentToken389 | FragmentToken390;
