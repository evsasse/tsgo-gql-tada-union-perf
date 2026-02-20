import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4989 } from "./fragment4989";
import type { FragmentToken4990 } from "./fragment4990";

export const FRAGMENT_4991 = gql(`
  fragment Fragment4991 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult4991 = ResultOf<typeof FRAGMENT_4991>;
type FragmentSelf4991 = NonNullable<FragmentResult4991>;

export type FragmentToken4991 =
  | FragmentSelf4991["__typename"]
  | FragmentSelf4991["typenameHint"] | FragmentToken4989 | FragmentToken4990;
