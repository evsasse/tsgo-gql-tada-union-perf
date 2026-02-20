import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4823 } from "./fragment4823";
import type { FragmentToken4824 } from "./fragment4824";

export const FRAGMENT_4825 = gql(`
  fragment Fragment4825 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult4825 = ResultOf<typeof FRAGMENT_4825>;
type FragmentSelf4825 = NonNullable<FragmentResult4825>;

export type FragmentToken4825 =
  | FragmentSelf4825["__typename"]
  | FragmentSelf4825["typenameHint"] | FragmentToken4823 | FragmentToken4824;
