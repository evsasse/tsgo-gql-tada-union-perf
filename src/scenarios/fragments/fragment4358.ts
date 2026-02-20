import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4356 } from "./fragment4356";
import type { FragmentToken4357 } from "./fragment4357";

export const FRAGMENT_4358 = gql(`
  fragment Fragment4358 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult4358 = ResultOf<typeof FRAGMENT_4358>;
type FragmentSelf4358 = NonNullable<FragmentResult4358>;

export type FragmentToken4358 =
  | FragmentSelf4358["__typename"]
  | FragmentSelf4358["typenameHint"] | FragmentToken4356 | FragmentToken4357;
