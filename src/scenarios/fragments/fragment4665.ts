import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4663 } from "./fragment4663";
import type { FragmentToken4664 } from "./fragment4664";

export const FRAGMENT_4665 = gql(`
  fragment Fragment4665 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult4665 = ResultOf<typeof FRAGMENT_4665>;
type FragmentSelf4665 = NonNullable<FragmentResult4665>;

export type FragmentToken4665 =
  | FragmentSelf4665["__typename"]
  | FragmentSelf4665["typenameHint"] | FragmentToken4663 | FragmentToken4664;
