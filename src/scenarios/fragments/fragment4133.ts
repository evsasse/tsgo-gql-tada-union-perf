import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4131 } from "./fragment4131";
import type { FragmentToken4132 } from "./fragment4132";

export const FRAGMENT_4133 = gql(`
  fragment Fragment4133 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult4133 = ResultOf<typeof FRAGMENT_4133>;
type FragmentSelf4133 = NonNullable<FragmentResult4133>;

export type FragmentToken4133 =
  | FragmentSelf4133["__typename"]
  | FragmentSelf4133["typenameHint"] | FragmentToken4131 | FragmentToken4132;
