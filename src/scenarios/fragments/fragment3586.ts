import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3584 } from "./fragment3584";
import type { FragmentToken3585 } from "./fragment3585";

export const FRAGMENT_3586 = gql(`
  fragment Fragment3586 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult3586 = ResultOf<typeof FRAGMENT_3586>;
type FragmentSelf3586 = NonNullable<FragmentResult3586>;

export type FragmentToken3586 =
  | FragmentSelf3586["__typename"]
  | FragmentSelf3586["typenameHint"] | FragmentToken3584 | FragmentToken3585;
