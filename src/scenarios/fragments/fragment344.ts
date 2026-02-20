import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken342 } from "./fragment342";
import type { FragmentToken343 } from "./fragment343";

export const FRAGMENT_344 = gql(`
  fragment Fragment344 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult344 = ResultOf<typeof FRAGMENT_344>;
type FragmentSelf344 = NonNullable<FragmentResult344>;

export type FragmentToken344 =
  | FragmentSelf344["__typename"]
  | FragmentSelf344["typenameHint"] | FragmentToken342 | FragmentToken343;
