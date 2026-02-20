import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken608 } from "./fragment608";
import type { FragmentToken609 } from "./fragment609";

export const FRAGMENT_610 = gql(`
  fragment Fragment610 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult610 = ResultOf<typeof FRAGMENT_610>;
type FragmentSelf610 = NonNullable<FragmentResult610>;

export type FragmentToken610 =
  | FragmentSelf610["__typename"]
  | FragmentSelf610["typenameHint"] | FragmentToken608 | FragmentToken609;
