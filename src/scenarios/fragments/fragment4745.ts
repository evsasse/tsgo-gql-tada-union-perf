import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4743 } from "./fragment4743";
import type { FragmentToken4744 } from "./fragment4744";

export const FRAGMENT_4745 = gql(`
  fragment Fragment4745 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult4745 = ResultOf<typeof FRAGMENT_4745>;
type FragmentSelf4745 = NonNullable<FragmentResult4745>;

export type FragmentToken4745 =
  | FragmentSelf4745["__typename"]
  | FragmentSelf4745["typenameHint"] | FragmentToken4743 | FragmentToken4744;
