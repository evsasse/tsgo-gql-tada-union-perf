import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3363 } from "./fragment3363";
import type { FragmentToken3364 } from "./fragment3364";

export const FRAGMENT_3365 = gql(`
  fragment Fragment3365 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult3365 = ResultOf<typeof FRAGMENT_3365>;
type FragmentSelf3365 = NonNullable<FragmentResult3365>;

export type FragmentToken3365 =
  | FragmentSelf3365["__typename"]
  | FragmentSelf3365["typenameHint"] | FragmentToken3363 | FragmentToken3364;
