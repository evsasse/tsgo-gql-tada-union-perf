import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken976 } from "./fragment976";
import type { FragmentToken977 } from "./fragment977";

export const FRAGMENT_978 = gql(`
  fragment Fragment978 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult978 = ResultOf<typeof FRAGMENT_978>;
type FragmentSelf978 = NonNullable<FragmentResult978>;

export type FragmentToken978 =
  | FragmentSelf978["__typename"]
  | FragmentSelf978["typenameHint"] | FragmentToken976 | FragmentToken977;
