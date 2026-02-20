import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4222 } from "./fragment4222";
import type { FragmentToken4223 } from "./fragment4223";

export const FRAGMENT_4224 = gql(`
  fragment Fragment4224 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult4224 = ResultOf<typeof FRAGMENT_4224>;
type FragmentSelf4224 = NonNullable<FragmentResult4224>;

export type FragmentToken4224 =
  | FragmentSelf4224["__typename"]
  | FragmentSelf4224["typenameHint"] | FragmentToken4222 | FragmentToken4223;
