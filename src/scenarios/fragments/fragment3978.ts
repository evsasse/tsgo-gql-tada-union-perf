import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3976 } from "./fragment3976";
import type { FragmentToken3977 } from "./fragment3977";

export const FRAGMENT_3978 = gql(`
  fragment Fragment3978 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult3978 = ResultOf<typeof FRAGMENT_3978>;
type FragmentSelf3978 = NonNullable<FragmentResult3978>;

export type FragmentToken3978 =
  | FragmentSelf3978["__typename"]
  | FragmentSelf3978["typenameHint"] | FragmentToken3976 | FragmentToken3977;
