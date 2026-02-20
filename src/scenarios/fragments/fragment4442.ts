import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4440 } from "./fragment4440";
import type { FragmentToken4441 } from "./fragment4441";

export const FRAGMENT_4442 = gql(`
  fragment Fragment4442 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult4442 = ResultOf<typeof FRAGMENT_4442>;
type FragmentSelf4442 = NonNullable<FragmentResult4442>;

export type FragmentToken4442 =
  | FragmentSelf4442["__typename"]
  | FragmentSelf4442["typenameHint"] | FragmentToken4440 | FragmentToken4441;
