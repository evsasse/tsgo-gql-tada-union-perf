import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken882 } from "./fragment882";
import type { FragmentToken883 } from "./fragment883";

export const FRAGMENT_884 = gql(`
  fragment Fragment884 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult884 = ResultOf<typeof FRAGMENT_884>;
type FragmentSelf884 = NonNullable<FragmentResult884>;

export type FragmentToken884 =
  | FragmentSelf884["__typename"]
  | FragmentSelf884["typenameHint"] | FragmentToken882 | FragmentToken883;
