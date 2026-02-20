import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4748 } from "./fragment4748";
import type { FragmentToken4749 } from "./fragment4749";

export const FRAGMENT_4750 = gql(`
  fragment Fragment4750 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult4750 = ResultOf<typeof FRAGMENT_4750>;
type FragmentSelf4750 = NonNullable<FragmentResult4750>;

export type FragmentToken4750 =
  | FragmentSelf4750["__typename"]
  | FragmentSelf4750["typenameHint"] | FragmentToken4748 | FragmentToken4749;
