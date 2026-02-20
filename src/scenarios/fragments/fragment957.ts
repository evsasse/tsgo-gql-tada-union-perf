import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken955 } from "./fragment955";
import type { FragmentToken956 } from "./fragment956";

export const FRAGMENT_957 = gql(`
  fragment Fragment957 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult957 = ResultOf<typeof FRAGMENT_957>;
type FragmentSelf957 = NonNullable<FragmentResult957>;

export type FragmentToken957 =
  | FragmentSelf957["__typename"]
  | FragmentSelf957["typenameHint"] | FragmentToken955 | FragmentToken956;
