import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken828 } from "./fragment828";
import type { FragmentToken829 } from "./fragment829";

export const FRAGMENT_830 = gql(`
  fragment Fragment830 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult830 = ResultOf<typeof FRAGMENT_830>;
type FragmentSelf830 = NonNullable<FragmentResult830>;

export type FragmentToken830 =
  | FragmentSelf830["__typename"]
  | FragmentSelf830["typenameHint"] | FragmentToken828 | FragmentToken829;
