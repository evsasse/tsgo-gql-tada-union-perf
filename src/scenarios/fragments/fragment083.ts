import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken081 } from "./fragment081";
import type { FragmentToken082 } from "./fragment082";

export const FRAGMENT_083 = gql(`
  fragment Fragment083 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult083 = ResultOf<typeof FRAGMENT_083>;
type FragmentSelf083 = NonNullable<FragmentResult083>;

export type FragmentToken083 =
  | FragmentSelf083["__typename"]
  | FragmentSelf083["typenameHint"] | FragmentToken081 | FragmentToken082;
