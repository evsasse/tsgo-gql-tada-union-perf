import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken814 } from "./fragment814";
import type { FragmentToken815 } from "./fragment815";

export const FRAGMENT_816 = gql(`
  fragment Fragment816 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult816 = ResultOf<typeof FRAGMENT_816>;
type FragmentSelf816 = NonNullable<FragmentResult816>;

export type FragmentToken816 =
  | FragmentSelf816["__typename"]
  | FragmentSelf816["typenameHint"] | FragmentToken814 | FragmentToken815;
