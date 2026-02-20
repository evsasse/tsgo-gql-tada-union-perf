import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken880 } from "./fragment880";
import type { FragmentToken881 } from "./fragment881";

export const FRAGMENT_882 = gql(`
  fragment Fragment882 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult882 = ResultOf<typeof FRAGMENT_882>;
type FragmentSelf882 = NonNullable<FragmentResult882>;

export type FragmentToken882 =
  | FragmentSelf882["__typename"]
  | FragmentSelf882["typenameHint"] | FragmentToken880 | FragmentToken881;
