import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken706 } from "./fragment706";
import type { FragmentToken707 } from "./fragment707";

export const FRAGMENT_708 = gql(`
  fragment Fragment708 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult708 = ResultOf<typeof FRAGMENT_708>;
type FragmentSelf708 = NonNullable<FragmentResult708>;

export type FragmentToken708 =
  | FragmentSelf708["__typename"]
  | FragmentSelf708["typenameHint"] | FragmentToken706 | FragmentToken707;
