import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken778 } from "./fragment778";
import type { FragmentToken779 } from "./fragment779";

export const FRAGMENT_780 = gql(`
  fragment Fragment780 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult780 = ResultOf<typeof FRAGMENT_780>;
type FragmentSelf780 = NonNullable<FragmentResult780>;

export type FragmentToken780 =
  | FragmentSelf780["__typename"]
  | FragmentSelf780["typenameHint"] | FragmentToken778 | FragmentToken779;
