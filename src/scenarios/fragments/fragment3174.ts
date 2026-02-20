import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3172 } from "./fragment3172";
import type { FragmentToken3173 } from "./fragment3173";

export const FRAGMENT_3174 = gql(`
  fragment Fragment3174 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult3174 = ResultOf<typeof FRAGMENT_3174>;
type FragmentSelf3174 = NonNullable<FragmentResult3174>;

export type FragmentToken3174 =
  | FragmentSelf3174["__typename"]
  | FragmentSelf3174["typenameHint"] | FragmentToken3172 | FragmentToken3173;
