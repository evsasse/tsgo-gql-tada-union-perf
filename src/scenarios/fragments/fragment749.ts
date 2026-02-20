import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken747 } from "./fragment747";
import type { FragmentToken748 } from "./fragment748";

export const FRAGMENT_749 = gql(`
  fragment Fragment749 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult749 = ResultOf<typeof FRAGMENT_749>;
type FragmentSelf749 = NonNullable<FragmentResult749>;

export type FragmentToken749 =
  | FragmentSelf749["__typename"]
  | FragmentSelf749["typenameHint"] | FragmentToken747 | FragmentToken748;
