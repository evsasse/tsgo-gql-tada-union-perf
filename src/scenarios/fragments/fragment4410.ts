import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4408 } from "./fragment4408";
import type { FragmentToken4409 } from "./fragment4409";

export const FRAGMENT_4410 = gql(`
  fragment Fragment4410 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult4410 = ResultOf<typeof FRAGMENT_4410>;
type FragmentSelf4410 = NonNullable<FragmentResult4410>;

export type FragmentToken4410 =
  | FragmentSelf4410["__typename"]
  | FragmentSelf4410["typenameHint"] | FragmentToken4408 | FragmentToken4409;
