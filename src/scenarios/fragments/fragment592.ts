import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken590 } from "./fragment590";
import type { FragmentToken591 } from "./fragment591";

export const FRAGMENT_592 = gql(`
  fragment Fragment592 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult592 = ResultOf<typeof FRAGMENT_592>;
type FragmentSelf592 = NonNullable<FragmentResult592>;

export type FragmentToken592 =
  | FragmentSelf592["__typename"]
  | FragmentSelf592["typenameHint"] | FragmentToken590 | FragmentToken591;
