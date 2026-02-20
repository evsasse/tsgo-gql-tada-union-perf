import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken541 } from "./fragment541";
import type { FragmentToken542 } from "./fragment542";

export const FRAGMENT_543 = gql(`
  fragment Fragment543 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult543 = ResultOf<typeof FRAGMENT_543>;
type FragmentSelf543 = NonNullable<FragmentResult543>;

export type FragmentToken543 =
  | FragmentSelf543["__typename"]
  | FragmentSelf543["typenameHint"] | FragmentToken541 | FragmentToken542;
