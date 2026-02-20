import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4685 } from "./fragment4685";
import type { FragmentToken4686 } from "./fragment4686";

export const FRAGMENT_4687 = gql(`
  fragment Fragment4687 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult4687 = ResultOf<typeof FRAGMENT_4687>;
type FragmentSelf4687 = NonNullable<FragmentResult4687>;

export type FragmentToken4687 =
  | FragmentSelf4687["__typename"]
  | FragmentSelf4687["typenameHint"] | FragmentToken4685 | FragmentToken4686;
