import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken930 } from "./fragment930";
import type { FragmentToken931 } from "./fragment931";

export const FRAGMENT_932 = gql(`
  fragment Fragment932 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult932 = ResultOf<typeof FRAGMENT_932>;
type FragmentSelf932 = NonNullable<FragmentResult932>;

export type FragmentToken932 =
  | FragmentSelf932["__typename"]
  | FragmentSelf932["typenameHint"] | FragmentToken930 | FragmentToken931;
