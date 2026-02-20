import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken784 } from "./fragment784";
import type { FragmentToken785 } from "./fragment785";

export const FRAGMENT_786 = gql(`
  fragment Fragment786 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult786 = ResultOf<typeof FRAGMENT_786>;
type FragmentSelf786 = NonNullable<FragmentResult786>;

export type FragmentToken786 =
  | FragmentSelf786["__typename"]
  | FragmentSelf786["typenameHint"] | FragmentToken784 | FragmentToken785;
