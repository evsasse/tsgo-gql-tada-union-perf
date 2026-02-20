import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken753 } from "./fragment753";
import type { FragmentToken754 } from "./fragment754";

export const FRAGMENT_755 = gql(`
  fragment Fragment755 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult755 = ResultOf<typeof FRAGMENT_755>;
type FragmentSelf755 = NonNullable<FragmentResult755>;

export type FragmentToken755 =
  | FragmentSelf755["__typename"]
  | FragmentSelf755["typenameHint"] | FragmentToken753 | FragmentToken754;
