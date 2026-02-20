import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4875 } from "./fragment4875";
import type { FragmentToken4876 } from "./fragment4876";

export const FRAGMENT_4877 = gql(`
  fragment Fragment4877 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult4877 = ResultOf<typeof FRAGMENT_4877>;
type FragmentSelf4877 = NonNullable<FragmentResult4877>;

export type FragmentToken4877 =
  | FragmentSelf4877["__typename"]
  | FragmentSelf4877["typenameHint"] | FragmentToken4875 | FragmentToken4876;
