import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4632 } from "./fragment4632";
import type { FragmentToken4633 } from "./fragment4633";

export const FRAGMENT_4634 = gql(`
  fragment Fragment4634 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult4634 = ResultOf<typeof FRAGMENT_4634>;
type FragmentSelf4634 = NonNullable<FragmentResult4634>;

export type FragmentToken4634 =
  | FragmentSelf4634["__typename"]
  | FragmentSelf4634["typenameHint"] | FragmentToken4632 | FragmentToken4633;
