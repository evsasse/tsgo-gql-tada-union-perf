import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3814 } from "./fragment3814";
import type { FragmentToken3815 } from "./fragment3815";

export const FRAGMENT_3816 = gql(`
  fragment Fragment3816 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult3816 = ResultOf<typeof FRAGMENT_3816>;
type FragmentSelf3816 = NonNullable<FragmentResult3816>;

export type FragmentToken3816 =
  | FragmentSelf3816["__typename"]
  | FragmentSelf3816["typenameHint"] | FragmentToken3814 | FragmentToken3815;
