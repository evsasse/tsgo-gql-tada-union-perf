import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3763 } from "./fragment3763";
import type { FragmentToken3764 } from "./fragment3764";

export const FRAGMENT_3765 = gql(`
  fragment Fragment3765 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult3765 = ResultOf<typeof FRAGMENT_3765>;
type FragmentSelf3765 = NonNullable<FragmentResult3765>;

export type FragmentToken3765 =
  | FragmentSelf3765["__typename"]
  | FragmentSelf3765["typenameHint"] | FragmentToken3763 | FragmentToken3764;
