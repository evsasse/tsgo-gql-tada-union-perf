import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3987 } from "./fragment3987";
import type { FragmentToken3988 } from "./fragment3988";

export const FRAGMENT_3989 = gql(`
  fragment Fragment3989 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult3989 = ResultOf<typeof FRAGMENT_3989>;
type FragmentSelf3989 = NonNullable<FragmentResult3989>;

export type FragmentToken3989 =
  | FragmentSelf3989["__typename"]
  | FragmentSelf3989["typenameHint"] | FragmentToken3987 | FragmentToken3988;
