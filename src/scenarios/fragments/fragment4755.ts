import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4753 } from "./fragment4753";
import type { FragmentToken4754 } from "./fragment4754";

export const FRAGMENT_4755 = gql(`
  fragment Fragment4755 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult4755 = ResultOf<typeof FRAGMENT_4755>;
type FragmentSelf4755 = NonNullable<FragmentResult4755>;

export type FragmentToken4755 =
  | FragmentSelf4755["__typename"]
  | FragmentSelf4755["typenameHint"] | FragmentToken4753 | FragmentToken4754;
