import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken838 } from "./fragment838";
import type { FragmentToken839 } from "./fragment839";

export const FRAGMENT_840 = gql(`
  fragment Fragment840 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult840 = ResultOf<typeof FRAGMENT_840>;
type FragmentSelf840 = NonNullable<FragmentResult840>;

export type FragmentToken840 =
  | FragmentSelf840["__typename"]
  | FragmentSelf840["typenameHint"] | FragmentToken838 | FragmentToken839;
