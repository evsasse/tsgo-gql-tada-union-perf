import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4556 } from "./fragment4556";
import type { FragmentToken4557 } from "./fragment4557";

export const FRAGMENT_4558 = gql(`
  fragment Fragment4558 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult4558 = ResultOf<typeof FRAGMENT_4558>;
type FragmentSelf4558 = NonNullable<FragmentResult4558>;

export type FragmentToken4558 =
  | FragmentSelf4558["__typename"]
  | FragmentSelf4558["typenameHint"] | FragmentToken4556 | FragmentToken4557;
