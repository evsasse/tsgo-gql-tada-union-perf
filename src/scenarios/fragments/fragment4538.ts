import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4536 } from "./fragment4536";
import type { FragmentToken4537 } from "./fragment4537";

export const FRAGMENT_4538 = gql(`
  fragment Fragment4538 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult4538 = ResultOf<typeof FRAGMENT_4538>;
type FragmentSelf4538 = NonNullable<FragmentResult4538>;

export type FragmentToken4538 =
  | FragmentSelf4538["__typename"]
  | FragmentSelf4538["typenameHint"] | FragmentToken4536 | FragmentToken4537;
