import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4578 } from "./fragment4578";
import type { FragmentToken4579 } from "./fragment4579";

export const FRAGMENT_4580 = gql(`
  fragment Fragment4580 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult4580 = ResultOf<typeof FRAGMENT_4580>;
type FragmentSelf4580 = NonNullable<FragmentResult4580>;

export type FragmentToken4580 =
  | FragmentSelf4580["__typename"]
  | FragmentSelf4580["typenameHint"] | FragmentToken4578 | FragmentToken4579;
